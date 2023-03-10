<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\CreateController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\DiscoverController;
use App\Http\Controllers\PictureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Picture;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/prueba/{i?}', function(Request $request, $i = 'ninguno'){
//     echo "El valor es $i";
//     dump($request);
// });

Route::get('/autoLiked', function(){
    $likes = Picture::whereHas('like', function($query)  {
        $query->whereColumn('user_id', 'pictures.user_id');
    })->get();

    echo $likes;
});
//Si esta logeado entra, si no back to login.

// NOT AUTH PAGES

// Welcome page
Route::get('/', [WelcomeController::class, 'view'])->name('welcome.view');
// Discover Page
Route::get('/discover', [DiscoverController::class, 'view'])->name('discover.view');
//Picture Page
Route::get('/picture', function(){return Redirect::route('discover.view');});
Route::get('/picture/{picture_id}', [PictureController::class, 'view'])->name('picture.view');


// AUTH PAGES
Route::middleware('auth')->group(function () {
    
    // Create Page
    Route::get('/create', [CreateController::class, 'view'])->name('create.view');
    Route::post('/create', [CreateController::class, 'save'])->name('create.save');
    
    // Galery Page
    Route::get('/galery', [GaleryController::class, 'view'])->name('galery.view');
    
    // Profile Page
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Likes to Pictures
    Route::post('/picture', [PictureController::class, 'like'])->name('picture.like');
    Route::delete('/picture', [PictureController::class, 'delete'])->name('picture.destroy');

    // Comments to Pictures
    Route::post('/comment', [CommentController::class, 'save'])->name('comment.save');
    
});

require __DIR__.'/auth.php';
