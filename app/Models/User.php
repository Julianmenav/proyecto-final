<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function picture() {
        return $this->hasMany(Picture::class);
    }

    public function comment() {
        return $this->hasMany(Comment::class);
    }

    public function savedItems() {
        return $this->hasMany(Saved::class);
    }
    
    // LA PARTE DE LOS LIKES 
    public function like() {
        // En el caso de que asumamos una segunda relacion entre user y picture,
        //  creo que habría que borrar el modelo Likes ya que la tabla es pivot.
        return $this->belongsToMany(Picture::class, 'likes', 'user_id', 'picture_id')->withTimestamps();
    }


    public function id()
    {
        return $this->id;
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
