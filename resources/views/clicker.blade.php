@extends('layouts.app')
@section('title', 'Clicker Test Livewire')
@section('content')
    <div class="container" style="height: 100vh;">
        <div class="row d-flex justify-content-center align-items-center" style="width: 100%; height: 100%;">
            <div class="col-3" style="height: auto;">
                <livewire:clicker/>
            </div>
        </div>
    </div>
@endsection
