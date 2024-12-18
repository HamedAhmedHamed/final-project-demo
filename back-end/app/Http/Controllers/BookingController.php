<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        // $bookings = $user->role === 'admin'
        //     ? Booking::all()
        //     : Booking::where('id', $user->id)->get();
        if ($user->role === 'admin') {
            $bookings = Booking::all();
        } else {
            $bookings = Booking::where('user_id', $user->id)->get();
        }
        return response()->json($bookings);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();

        $user->bookings()->create([
            "registration_date" => $request->registration_date,
            "registration_time" => $request->registration_time,
            "name" => $request->name,
            "phone" => $request->phone,
            "number_of_persons" => $request->number_of_persons,
            "status" => $request->status
        ]);

        return response()->noContent();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Booking::where('id', $id)->update([
            'status' => $request->status
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
