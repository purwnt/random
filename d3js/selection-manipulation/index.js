// javascript
d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.attr('id', 'headOne')
.text('Update h1 tag')

d3.select('body').append('p').text('This is first paragraph')

d3.selectAll('p').style('color', 'blue')