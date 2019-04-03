;doc={};

doc.name=
`
jQuery
jQuery API
`;

doc.jquery_api_index=
`
ajax
attributes
callbacks object
core
css
data
deferred object
dimensions
effects
events
forms
internals
manipulation
miscellaneous
offset
properties
selectors
deprecated
removed
`;

doc.jquery_api_index_level_2=
`
ajax
attributes
callbacks object
core
css
data
deferred object
dimensions
effects
> basic
> custom
> fading
> sliding
events
> browser events
> document loading
> event handler attachment
> event object
> form event
> keyboard events
> mouse events
forms
internals
manipulation
> class attributes
> copying
> dom insertion, around
> dom insertion, inside
> dom insertion, outside
> dom removal
> dom repplacement
> general attributes
> style properties
miscellaneous
> collection manipulation
> data storage
> dom element methods
> setup methods
offset
properties
> properties of jquery object instances
> properties of the global jquery object
selectors
> attribute
> basic
> basic filter
> content filter
> form
> hierarchy
> jquery extensions
> visibility filter
traversing
> filtering
> miscellaneous traversing
> tree traversal
utilities
version
deprecated
removed
`;

doc.jquery_ajax=
`
`;

doc.jquery_attributes=
`
`;

doc.jquery_callbacks_object=
`
jQuery.Callbacks()
callbacks.add()
callbacks.disable()
callbacks.disabled()
callbacks.empty()
callbacks.fire()
callbacks.fired()
callbacks.fireWith()
callbacks.has()
callbacks.lock()
callbacks.remove()
`;

doc.jquery_core=
`
jQuery()
jQuery.holdReady()
jQuery.noConflict()
jQuery.ready()
jQuery.readyException()
# jQuery.sub()
jQuery.when()
`;

doc.jquery_css=
`
.addClass()
.css()
.hasClass()
.height()
.innerHeight()
.innerWidth()
jQuery.cssHooks
jQuery.cssNumber
jQuery.escapeSelector()
.offset()
.outerHeight()
.outerWidth()
.position()
.removeClass()
.scrollLeft()
.scrollTop()
.toggleClass()
.width()
`;

doc.jquery_data=
`
.clearQueue()
.data()
.dequeue()
jQuery.data()
jQuery.dequeue()
jQuery.hasData()
jQuery.queue()
jQuery.removeData()
.queue()
.removeData()
`;

doc.jquery_deferred_object=
`
jQuery.deferred()
deferred.always()
deferred.catch()
deferred.done()
deferred.fail()
# deferred.isRejected()
# deferred.isResolved()
deferred.notify()
deferred.notifyWith()
# deferred.pipe()
deferred.progress()
deferred.promise()
deferred.reject()
deferred.rejectWith()
deferred.resolve()
deferred.resolveWith()
deferred.state()
deferred.then()
jQuery.Deferred()
jQuery.when()
.promise()
`;

doc.jquery_dimensions=
`
.height()
.innerHeight()
.innerWidth()
.outerHeight()
.outerWidth()
.width()
`;

doc.jquery_effects=
`
.animate()
.clearQueue()
.delay()
.dequeue()
.fadeIn()
.fadeOut()
.fadeTo()
.fadeToggle()
.finish()
.hide()
# jQuery.fx.interval
jQuery.fx.off
jQuery.speed
.queue()
.show()
.slideDown()
.slideToggle()
.slideUp()
.stop()
.toggle()
`;

doc.jquery_events=
`
# .bind()
.blur()
.change()
.click()
.contextmenu()
.dblclick()
# .delegate()
# .die()
# .error()
event.currentTarget
event.data
event.delegateTarget
event.isDefaultPrevented()
event.isImmediatePropagationStopped()
event.isPropagationStopped()
event.metaKey
event.namespace
event.pageX
event.pageY
event.preventDefault()
event.relatedTarget
event.result
event.stopImmediatePropagation()
event.stopPropagation()
event.target
event.timeStamp
event.type
event.which
.focus()
.focusin()
.focusout()
.hover()
jQuery.holdReady()
jQuery.proxy()
jQuery.ready()
.keydown()
.keypress()
.keyup()
# .live()
# .load()
.mousedown()
.mouseenter()
.mouseleave()
.mousemove()
.mouseout()
.mouseover()
.mouseup()
.off()
.on()
.one()
.ready()
.resize()
.scroll()
.select()
.submit()
# .toggle()
.trigger()
.triggerHandler()
# .unbind()
# .undelegate()
# .unload()

`;

doc.jquery_forms=
`
.blur()
.change()
.focus()
.focusin()
.focusout()
jQuery.param()
.select()
.serialize()
.serializeArray()
.submit()
.val()
`;

doc.jquery_internals=
`
# .context
.jquery
jQuery.error()
.pushStack()
# .selector
`;

doc.jquery_manipulation=
`
.addClass()
.after()
.append()
.appendTo()
.attr()
.before()
.clone()
.css()
.detach()
.empty()
.hasClass()
.height()
.html()
.innerHeight()
.innerWidth()
.insertAfter()
.insertBefore()
jQuery.cssNumber
jQuery.htmlPrefilter()
.offset()
.outerHeight()
.outerWidth()
.position()
.prepend()
.prependTo()
.prop()
.remove()
.removeAttr()
.removeClass()
.removeProp()
.replaceAll()
.replaceWith()
.scrollLeft()
.scrollTop()
.text()
.toggleClass()
.unwrap()
.val()
.width()
.wrap()
.wrapAll()
.wrapInner()
`;

doc.jquery_miscellaneous=
`
.data()
.each()
.get()
.index()
jQuery.noConflict()
jQuery.param()
.removeData()
# .size()
.toArray()
`;

doc.jquery_offset=
`
.offset()
.offsetParent()
.position()
.scrollLeft()
.scrollTop()
`;

doc.jquery_properties=
`
# .context
.jquery
# jQuery.browser
# jQuery.fx.interval
jQuery.fx.off
jQuery.holdReady()
jQuery.ready
# jQuery.support
.length
# .selector
`;

doc.jquery_selectors=
`
*
:animated
[name|="value"] ( Attribute Contains Prefix Selector )
[name*="value"] ( Attribute Contains Selector )
[name~="value"] ( Attribute Contains Word Selector )
[name$="value"] ( Attribute Ends With Selector )
[name="value"]  ( Attribute Equals Selector )
[name!="value"] ( Attribute Not Equal Selector )
[name^="value"] ( Attribute Starts With Value )
:button
:checkbox
:checked
parent>child ( Child Selector )
.class ( Class Selector )
:contains("searchtext")
ancestor descentant ( Descendant Selector )
:disabled
element ( Element Selector )
:empty
:enabled
:eq(n), :eq(-n) ( n-th Index Element Selector )
:event
:file
:first-child
:first-of-type
:first
:focus
:gt(n) ( Greater Than Index Selector )
[name] ( Has Attribute Name Selector )
:has(selector) ( Has Selector )
:header
:hidden
#my_id ( ID Selector )
:image
:input
:lang()
:last-child
:last-of-type
:last
:lt(n) ( Less Than Index Selector )
[name="value"][name2="value2"] ( Multiple Attributes Selector )
selector1, selector2, selectorN ( Multiple Selectors )
prev + next ( Next Adjacent Element Selector )
prev ~ siblings ( Next Siblings Selector )
:not(selector) ( Not Selector )
:nth-child(n)
:nth-last-child(n)
:nth-of-type(n)
:nth-last-of-type(n)
:odd
:only-child
:only-of-type
:parent
:password
:radio
:reset
:root
:selected
:submit
:target
:text
:visible
`;

doc.jquery_traversing=
`
.add()
.addBack()
# .andSelf()
.children()
.closest()
.contents()
.each()
.end()
.eq()
.filter()
.find()
.first()
.has()
.is()
.last()
.map()
.next()
.nextAll()
.nextUntil()
.not()
.offsetParent()
.parent()
.parents()
.parentUntil()
.prev()
.prevAll()
.prevUntil()
.siblings()
.slice()
`;

doc.jquery_utilities=
`
.clearQueue()
.dequeue()
# jQuery.boxModel
# jQuery.browser
jQuery.contains()
jQuery.data()
jQuery.dequeue()
jQuery.each()
jQuery.extend()
jQuery.fn.extend()
jQuery.globalEval()
jQuery.grep()
jQuery.inArray()
jQuery.isArray()
jQuery.isEmptyObject()
# jQuery.isFunction()
jQuery.isNumeric()
jQuery.isPlainObject()
# jQuery.isWindow()
jQuery.isXMLDoc()
jQuery.makeArray()
jQuery.map()
jQuery.merge()
jQuery.noop()
jQuery.now()
jQuery.parseHTML()
# jQuery.parseJSON()
jQuery.parseXML()
jQuery.proxy()
jQuery.queue()
jQuery.removeData()
# jQuery.support
jQuery.trim()
# jQuery.unique()
jQuery.uniqueSort()
.queue()
`;

doc.links=
`
REFERENCE LINKS:

https://jquery.com/
https://api.jquery.com/
https://jqueryui.com/
https://jquerymobile.com/
https://sizzlejs.com/
https://qunitjs.com/
https://github.com/jquery
https://github.com/jquery/jquery
`;