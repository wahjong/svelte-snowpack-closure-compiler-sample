<script>
export let el
export let wrapper
</script>

<h1>Box.svelte:</h1>
el: {el},
wrapper: {wrapper},

<div
  bind:this={el}
>
  <slot></slot>
</div>
