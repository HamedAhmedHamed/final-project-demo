<?php

namespace App\Http\Controllers;

use App\Models\MenuItems;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class MenuItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menuItems = MenuItems::all();
        return response()->json($menuItems);
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

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $imageUrl = Storage::url($imagePath);
            $data = MenuItems::create([
                ...$validator,
                'image' => url($imageUrl)
            ]);
            return response($data, Response::HTTP_CREATED);
        }

        //error handling

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
        $validator = $request->validate([
            // 'image' => [['mimes:png,jpg,jpeg,webp']],
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category' => 'required'
        ]);

        $menuItem = MenuItems::where('id', $id)->update($request);

        return response($menuItem);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $menuItem = MenuItems::where('id', $id)->first();
        $imageUrl = $menuItem->image;
        $imagePath = str_replace('/storage/', '', parse_url($imageUrl, PHP_URL_PATH));
        if(Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $menuItem->delete();
        return response($menuItem);
    }
}
