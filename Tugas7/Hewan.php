<?php
class hewan
{
    private $nama;
    private $umur;

    public function setNama($nama)
    {
        $this->nama = $nama;
    }
    public function setUmur($umur)
    {
        $this->umur = $umur;
    }
    public function getNama()
    {
        return $this->nama;
    }
    public function getUmur()
    {
        return $this->umur;
    }
}
