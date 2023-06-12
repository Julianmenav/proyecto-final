<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'image_url',
        'user_id'
    ];

    public function id()
    {
        return $this->id;
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function comment() {
        return $this->hasMany(Comment::class);
    }

    public function savedItems() {
        return $this->hasMany(Saved::class);
    }

    public function like() {
        // En el caso de que asumamos una segunda relacion entre user y picture,
        //  creo que habría que borrar el modelo Likes ya que la tabla es pivot.
        return $this->belongsToMany(User::class, 'likes', 'picture_id', 'user_id')->withTimestamps();
    }
}
