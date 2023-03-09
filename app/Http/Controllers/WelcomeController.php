<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function view(Request $request): Response
    {

        $lastPicture = Picture::with('user')->latest()->first();
        
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'lastPicture' => $lastPicture
        ]);
    }
}
