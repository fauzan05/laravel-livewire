<div class="row d-flex-row">
    <button class="col-4 btn btn-primary" wire:click="increment">+</button>
    <h1 class="col-4 text-center">{{ $count }}</h1>
    <button class="col-4 btn btn-danger" wire:click="decrement">-</button>
</div>