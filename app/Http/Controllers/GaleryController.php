<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleryController extends Controller
{
    public function view(Request $request) {
        return Inertia::render('Galery/Galery');
    }
}
