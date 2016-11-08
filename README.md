# Stealth UI Framework
Stealth is a quick and easy way to design consistent and responsive web interfaces. Stealth comes packed with pre-made CSS classes that can easily structure a web interface. It's still a work in progress, as I will be adding new classes as I find need.

# How To Use
## Responsive Grid System
Stealth uses a 12-column grid system to design responsive interfaces. The class `col-#` represents how many 1/12 columns the column will take up. You can create a grid with 2 equivalent columns like this:

 ```
 <div class="section group">
 
    <div class="col col-6">
      This is column 1
    </div>
    
    <div class="col col-6">
      This is column 2
    </div>
    
  </div>
 ```
 
 Likewise, you can create a grid with 3 equivalent columns like this:
 
  ```
 <div class="section group">
 
    <div class="col col-4">
      This is column 1
    </div>
    
    <div class="col col-4">
      This is column 2
    </div>
    
    <div class="col col-4">
      This is column 2
    </div>
    
  </div>
 ```
 
## Buttons
 Stealth's `.btn` class lets you easily create beautiful buttons. Stealth lets you create normal buttons, success buttons, and danger buttons. Each button type has proper coloring and hover actions. You can create a button like this:
 
 ```
 <button class="btn">Tap Me</button>
 ```
 Likewise, you can create a success button like this:
 
 ```
 <button class="btn success">You Did It!</button>
 ```
 
## Alerts
 Stealth's `.alert` class lets you easily create beautiful, animated alerts. These are perfect for form validation messages. Stealth lets you create normal alerts, success alerts, and danger alerts. You can create an alert like this:
 
 ```
 <div class="alert">Look here!</div>
 ```
 Likewise, you can create a success alert like this:
 ```
 <div class="alert success">Congratulations! You won a free trip!</div>
 ```
 ***<i>Alert messages without text will not be visible - so you can keep them in your code!</i>
