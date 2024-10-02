<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "registration_date",
        "registration_time",
        "name",
        "status",
        "phone",
        "number_of_persons"
    ];

    protected $dates = [
        'deleted_at'
    ];

    protected $guarded = [
        "id",
        "timestamps",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
