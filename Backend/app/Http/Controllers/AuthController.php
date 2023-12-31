<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;
use \stdClass;
use function Laravel\Prompts\error;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'rol' => 'required|string|min:5'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol' => $request->rol
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]);
    }


    public function login(Request $request){
        if (!Auth::attempt($request->only('email','password')))
        {
            return response()
                ->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        // Incluir información adicional del usuario en el token
        $token = $user->createToken('auth_token', ['user' => $user])->plainTextToken;

        return response()
            ->json([
                'message' => 'Hi ' . $user->name,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
            ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return[
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
    }
}
