<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CreateController extends Controller
{
    public function save(Request $request)
    {
        $request->validate([
            'description' => 'required|string|max:255',
            'picture' => 'required',
        ]);

        $userId = Auth::id();
        $description = $request->description;
        $path = $request->file('picture')->store('public');
        $storage_path = Storage::url($path);

        $picture = Picture::create([
            'description' => $description,
            'image_url' => $storage_path,
            'user_id' => $userId
        ]);

        return Redirect::route('galery.view');
        // return Redirect::route('picture.view', $picture->id);
    }

    public function view(Request $request) {
        return Inertia::render('Create/Create');
    }
}
