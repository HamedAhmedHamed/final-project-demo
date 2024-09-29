<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::all();
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
        $booking = Booking::create([
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

    // public function accept(string $id)
    // {
    //     Booking::where('id', $id)->update([
    //         "status" => "accepted"
    //     ]);

    //     return response()->noContent();
    // }
    
    // public function reject(string $id)
    // {
    //     Booking::where('id', $id)->update([
    //         "status" => "rejected"
    //     ]);

    //     return response()->noContent();
    // }

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
