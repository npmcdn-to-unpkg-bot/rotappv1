<?php 

	include('pdo.php');

	try {
		
		$stmt = $pdo->query("SELECT * FROM categoria");
		$json_data = array();
		
		for($i=0; $i<$stmt->rowCount(); $i++){
			array_push($json_data, $stmt->fetch(PDO::FETCH_ASSOC));
		};

		echo json_encode($json_data);


	} catch (PDOException $e) {
		echo 'Error ' . $e->getMessage();
	}

?>
