function dragEnd( ) {
  console.log(document.body.scrollHeight)
  const currentScrollHeight = window.scrollY + window.innerHeight;
  const totalHeight = document.body.scrollHeight;
  if(currentScrollHeight >= totalHeight) {
    console.log('end of page')
    window.parent.postMessage({fromUrl:window.location.href,message: 'end of page'},'*')
  }
}
export default dragEnd;