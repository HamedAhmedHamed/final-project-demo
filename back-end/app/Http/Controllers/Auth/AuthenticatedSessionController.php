<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request) : JsonResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        $token = $request
                    ->user()
                    ->createToken('access-token')
                    ->plainTextToken;

        return response()->json([
            'token' => $token,
            'role' => Auth::user()->role
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): HttpResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
