<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Picture>
 */
class PictureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $random_number = rand(1, 20);
        $image_url = "https://raw.githubusercontent.com/Julianmenav/stuff/main/daw/slideshow/{$random_number}.jpeg";
        
        // 30% of img will be from faker
        if(rand(1,10) > 7){
            $image_url = fake()->imageUrl(800, 500, 'img', true);
        }

        return [
            'description' => fake()->sentence(),
            'image_url' => $image_url,
            'user_id' => User::all()->random()->id()
        ];
    }
}
