<?php
// CAAP 2026 — API minimale PHP 8 + PDO_SQLITE. Déployer sur un hébergement HTTPS.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
$colleges = ['André Malraux','Beaumarchais','Claude Chappe','Couperin','Debussy','Françoise Dolto','Georges Méliès','Jean Moulin','Jean Perrin','Jean-Baptiste Clément','La Grange aux Belles','Lacore','Marie Curie','Mendès-France','Nicolas de Staël','Octave Gréard','Raymond Queneau','Saint-Exupéry','Utrillo','Les amis du CAAP'];
try {
  $db = new PDO('sqlite:'.__DIR__.'/caap-data.sqlite',null,null,[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec('PRAGMA busy_timeout=5000');
  $db->exec('CREATE TABLE IF NOT EXISTS validations (token_hash TEXT NOT NULL, day INTEGER NOT NULL, college TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(token_hash,day))');
  if ($_SERVER['REQUEST_METHOD']==='POST') {
    $input=json_decode(file_get_contents('php://input'),true);
    $college=$input['college']??null; $day=$input['day']??null; $token=$input['token']??null;
    if(!is_string($college)||!in_array($college,$colleges,true)||!is_int($day)||$day<1||$day>24||!is_string($token)||strlen($token)>128||strlen($token)<12){http_response_code(400);echo json_encode(['error'=>'Données invalides.']);exit;}
    $now=new DateTimeImmutable('now',new DateTimeZone('Europe/Paris'));
    if($now->format('Y-m')!=='2026-12'||(int)$now->format('j')<$day){http_response_code(403);echo json_encode(['error'=>'Ce défi n’est pas encore ouvert.']);exit;}
    $hash=hash('sha256',$token);
    $stmt=$db->prepare('INSERT OR IGNORE INTO validations(token_hash,day,college) VALUES(?,?,?)');$stmt->execute([$hash,$day,$college]);
    if($stmt->rowCount()===0){http_response_code(409);echo json_encode(['error'=>'Ce défi a déjà été validé sur cet appareil.']);exit;}
  } elseif ($_SERVER['REQUEST_METHOD']!=='GET') {http_response_code(405);echo json_encode(['error'=>'Méthode non autorisée.']);exit;}
  $counts=array_fill_keys($colleges,0);
  foreach($db->query('SELECT college, COUNT(*) AS n FROM validations GROUP BY college') as $row){if(array_key_exists($row['college'],$counts))$counts[$row['college']]=(int)$row['n'];}
  echo json_encode(['counts'=>$counts,'total'=>array_sum($counts)],JSON_UNESCAPED_UNICODE);
} catch(Throwable $e){http_response_code(500);echo json_encode(['error'=>'Erreur du serveur.']);}
