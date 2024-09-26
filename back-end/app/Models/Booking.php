<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        "registration_date",
        "registration_time",
        "name",
        "status",
        "phone",
        "number_of_persons"
    ];

    protected $guarded = [
        "id",
        "timestamps",
    ];
}
