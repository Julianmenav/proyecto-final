<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

//Utilizamos la clase DB
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        // \App\Models\User::factory(20)->create();
        $faker = \Faker\Factory::create();
        $userData = [];
        for ($i = 0; $i <= 20; $i++) {
            $userData[] =
                [
                    "name" => $faker->firstName(),
                    "surname" => $faker->lastName,
                    "picture" => $faker->imageUrl(),
                    "email" => $faker->email,
                    "password" => Hash::make("123456")
                ];
        }
        // dd($userData);
        // No recuerdo como insertar en la base de datos?
        // DB::insert($userData);
    }
}
