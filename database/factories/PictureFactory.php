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

        $random_number = rand(1, 100);

        return [
            'description' => fake()->sentence(),
            'image_url' => "https://picsum.photos/id/{$random_number}/400",
            'user_id' => User::all()->random()->id()
        ];
    }
}
