<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$router->group(['prefix' => 'api/v1'], function () use ($router) {

    //users API
    $router->group(['prefix' => 'user'], function () use ($router) {

        //get the user api
        $router->get('info','usersController@getUser');
    });
});