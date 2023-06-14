<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function view(Request $request) {

        return Inertia::render('Admin/AdminPanel');
 
    }
}