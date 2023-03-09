<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use \App\Models\User;
use \App\Models\Picture;
use \App\Models\Comment;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(20)->create();
        Picture::factory(30)->create();
        Comment::factory(60)->create();

        $users = User::all();
        $pictures = Picture::all();
        
        foreach($users as $user){
            foreach($pictures as $picture){
                if (rand(0,1) == 1){
                    $user->like()->attach($picture);
                }
            }
        }
    }
}
