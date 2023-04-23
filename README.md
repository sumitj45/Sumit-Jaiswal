# SteelEye Assingment 

<h2>1.Explain what the simple List component does.</h2>

Ans-A common graphical user interface element in software programmes and websites for displaying a list of related items is the simple List component. It is a fundamental UI element that enables programmers to present a set of data in a structured and user-friendly manner.

A simple List component typically consists of a layout of rows, one row per item from the list, either vertically or horizontally. Text, images, or icons can all be used to display different types of data for each item on the list.

<h2>2.What problems / warnings are there with code?</h2>

1.The setSelectedIndex and selectedIndex variables are reversed in the WrappedListComponent component. setSelectedIndex should come first, followed by selectedIndex.

The isSelected prop in WrappedSingleListItem is being passed a value of selectedIndex, which is a state variable, instead of a boolean value indicating whether the item is selected or not. This can cause the background color of the item to always be green, even when it's not selected.
The items prop in WrappedListComponent is initialized with a default value of null, which can cause errors when trying to map over it.
List.jsx:60 Uncaught TypeError: PropTypes.shapeOf is not a function
on line no 60 there is a error as PropTypes is wrongly called it should be called like this-
items: PropTypes.arrayOf(
PropTypes.shape({
text: PropTypes.string.isRequired,
})

<h2>3.Please fix, optimize, and/or modify the component as much as you think is necessary.</h2>

Optimized code given below:


<h1> https://github.com/sumitj45/Sumit-Jaiswal_Frontend/blob/master/assingment/src/List.jsx </h1>




  <h3>points :</h3>
1.The memo function is used to memoize the SingleListItem and WrappedListComponent components. However, since the SingleListItem component is very simple and does not have any state or props that change frequently, it is not necessary to memoize it. Removing the memo function from SingleListItem can improve performance.

2.The useEffect hook is used to set the initial state of selectedIndex when the items prop changes. However, since selectedIndex is not used until the user clicks on a list item, it is not necessary to set the initial state in this way. Instead, we can initialize selectedIndex to null and update it only when the user clicks on a list item.

3 The handleClick function can be simplified by directly by passing the index of the clicked item to setSelectedIndex
