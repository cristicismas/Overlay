# Overlay React Component



### Hi there!

This is a react component that you can quickly clone into your project and start using it!

All you have to do to get started is have react installed in your node_modules folder, and pass the right props to the component.

#### On close listener

This component takes in an onClick listener, that you can pass to is as a prop with the name of onCloseOverlay.

This function will be used to close the overlay from it's parent component.

Example:

```
...
this.state = { showOverlay: false }
...
onCloseOverlay() {
	this.setState({ showOverlay: false });
}
...
render() {
	return (
  	<div>
  		<button onClick={() => this.setState({ showOverlay: true })}>Open overlay</button>
  		<Overlay onCloseOverlay={this.onCloseOverlay} content={null} style={...} />
		</div>
  );
}
```



#### Content

The content of the overlay is simply passed down as the __content__ prop.

This can either be a string, an html <div> or even a component as <Component />.

#### Styling

You can pass additional custom styles to the component using a **style** object as a prop. To limit the size of the overlay don't forget to at least pass a **max-height** into this object.




