<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {

	public function index()
	{
		$this->load->view('header_view');
		$this->load->view('body_view');
		$this->load->view('footer_view');
	}
}
