<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MenuItems extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'image',
        'title',
        'description',
        'price',
        'category'
    ];

    protected $dates = [
        'deleted_at'
    ];

    protected $guarded = [
        'id',
        'timestamps'
    ];
}
