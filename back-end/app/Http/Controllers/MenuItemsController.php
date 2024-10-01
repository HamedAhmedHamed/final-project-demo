<?php

namespace App\Http\Controllers;

use App\Models\MenuItems;
use Illuminate\Http\Request;

class MenuItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $validator = $request->validate([
            'image' => 'required|mimes:png,jpg,jpeg,webp',
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category' => 'required'
        ]);

        if ($request->has('image')) {
            $image = $request->file('image');
            $ext = $image->getClientOriginalExtension();

            $imageName = time().''.$ext;
            $path = '/uploads/menu-items';

            $image->move($path, $imageName);
        }

        MenuItems::create([
            'image' => $path . $imageName,
            ...$validator
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
