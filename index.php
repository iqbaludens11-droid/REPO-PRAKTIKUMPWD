
<?php
include 'data.php';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tabel Perkalian</title>

    <style>
        table {
            border-collapse: collapse;
            margin-left: 300px;
            text-align: center;
            font-family: Arial;
        }

        th, td {
            border: 4px solid gray;
            padding: 5px 10px;
            font-size: 18px;
        }

        th {
            background-color: pink;
        }

        .angka {
            background-color: red;
            font-weight: bold;
        }

        .biru {
            background-color: cyan;
        }

        .pink {
            background-color: yellow;
        }
    </style>
</head>

<body>

<table>
    <tr>
        <th>bilangan</th>

        <?php foreach ($data as $angka) { ?>
            <th><?= $angka ?></th>
        <?php } ?>

    </tr>

    <?php foreach ($data as $baris) { ?>

    <tr>
        <td class="angka"><?= $baris ?></td>

        <?php foreach ($data as $kolom) {

            $hasil = $baris * $kolom;

            if ($hasil == 1) {
                $warna = "angka";
            } elseif ($hasil % 2 == 0) {
                $warna = "biru";
            } else {
                $warna = "pink";
            }

        ?>

            <td class="<?= $warna ?>">
                <?= $hasil ?>
            </td>

        <?php } ?>

    </tr>

    <?php } ?>

</table>

</body>
</html>
