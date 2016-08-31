<?php 

	include('pdo.php');

	try {
		
		$stmt = $pdo->query("SELECT destinos.id_destino, destinos.nome, destinos.descricao, destinos.imgurl, destinos.slug, destinos.categoria_id_categoria, categoria.id_categoria, categoria.nome as cat FROM destinos JOIN categoria ON destinos.categoria_id_categoria = categoria.id_categoria");
		$json_data = array();
		
		for($i=0; $i<$stmt->rowCount(); $i++){
			array_push($json_data, $stmt->fetch(PDO::FETCH_ASSOC));
		};
		// echo "<pre>";
		// print_r($json_data);
		// echo "</pre>";

		echo json_encode($json_data);


	} catch (PDOException $e) {
		echo 'Error ' . $e->getMessage();
	}

?>
