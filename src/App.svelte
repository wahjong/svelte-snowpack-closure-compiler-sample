<script>
import Box from './Box.svelte'

let el
let wrapper
let text = '123456'
</script>

<h1>App.svelte:</h1>
el: {el},
wrapper: {wrapper},
text: {text},

<div
  bind:this={wrapper}
>
  <Box
    bind:el
    bind:wrapper
  >
    <h1>{text}</h1>
  </Box>
</div>

<button type="button" on:click={() =>{
 text = 'abc'
}}>Change</button>

