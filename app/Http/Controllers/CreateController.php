<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use OpenAI;

class CreateController extends Controller
{
    public function generateImage(Request $request)
    {
        $api_key = getenv('OPENAI_API_KEY');
        $openAI_client = OpenAI::client($api_key);
        $request->validate([
            'prompt' => 'required|min:3|string|max:255',
        ]);
        
        $prompt = $request->prompt;
        
        // Generate Image
        $response = $openAI_client->images()->create([
            'prompt' => $prompt,
            'n' => 1,
            'size' => '512x512',
            'response_format' => 'url',
        ]);
        
        // $rand = rand(1,20);
        // sleep(4);
        // $response = ['data' => [["url" => "https://raw.githubusercontent.com/Julianmenav/stuff/main/daw/slideshow/{$rand}.jpeg"]]];
        
        $url = $response['data'][0]['url'];
        $contents = file_get_contents($url);
        $url_path = parse_url($url, PHP_URL_PATH);
        $filename = basename($url_path);
        Storage::put('public/'.$filename, $contents);
        $storage_path = Storage::url('public/'.$filename);
        
        $userId = Auth::id();
        $picture = Picture::create([
            'description' => $prompt,
            'image_url' => $storage_path,
            'user_id' => $userId
        ]);

        return json_encode(['url' => $storage_path]);
    }

    public function view(Request $request) {
        return Inertia::render('Create/Create');
    }
}
