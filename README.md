# Applitools UFG Hackathon WebDriverIO v5
Submitter: Abdur Rehman Ashraf

#### Stack
<img src="https://img.stackshare.io/service/4185/webdriver.io.png?raw=true?raw=true" width="90" height="90" /><img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/applitools-logo.png?raw=true" height="90"/>    <img src="https://i.pinimg.com/originals/48/4d/9a/484d9a03c676a55671a9d257a48c4378.png?raw=true?raw=true" width="110" height="70"/><img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/497b0e54f87f161922582bf41582b78c02b40429/junk/JasmineJS.svg?raw=true" width="220" height="70" />

#### Setup
1- Clone the Repo<br />
`$ git clone https://github.com/rehmanuet/UGF-Hackathon-WebDriverIO.git`<br/>
2- Open the Project<br />
3- Install the dependencies from package.json<br />
`$ npm install`<br />
4- Use following commands to run test <br/>
|    <b><sub>Command</sub></b>   |    <b><sub>Task</sub>   </b> |
| ------------- | ------------- |
|     <sub>npm run task1:v1</sub>    | <sub>Task 1 - V1</sub>  |
|     <sub>npm run task1:v2</sub>   |     <sub>Task 1 - V2</sub>          |
| <sub>npm run task2:v1</sub> | <sub>Task 2 - V1</sub>   |
|     <sub>npm run task2:v2</sub>    | <sub>Task 2 - V2</sub>  |
|     <sub>npm run task3:v1</sub>   |     <sub>Task 3 - V1</sub>          |
| <sub>npm run task3:v2</sub> | <sub>Task 3 - V2</sub>   |
|     <sub>npm run task1:ufg</sub>   |     <sub>Task 1 - UFG</sub>          |
| <sub>npm run task2:ufg</sub> | <sub>Task 2 - UFG</sub>   |
| <sub>npm run task3:ufg</sub> | <sub>Task 3 - UFG</sub>   |

```Note: All test can run parallel on cross-browser just uncomment the`browser name from capabilties in wdio.conf.js, By-Default I set Chrome browser for simplicity```

For execution on Edge Chromium , one has to do following [setting](https://stackoverflow.com/a/59996510>) on windows (Policies has been changed by [Microsoft Team](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) )
After setting up Edge Setting , Use following command to up the Edge Chromium via selenium standalone server from cmd. <br/>
``` 
$ java "-Dwebdriver.edge.driver=<path-of-repo>\\edgedriver\\msedgedriver.exe" -jar "<path-of-repo>\\edgedriver\\selenium-server-standalone-3.141.59.jar" -port 4444 <br/>
```
Example: <br/>
```
$ java "-Dwebdriver.edge.driver=F:\\UGF-Hackathon-WebDriverIO\\edgedriver\\msedgedriver.exe" -jar "F:\\UGF-Hackathon-WebDriverIO\\edgedriver\\selenium-server-standalone-3.141.59.jar" -port 4444
```



#### Browser & Viewport Catered
|    Browsers   |    Version    |    Device    |   Viewport    |
| :-:  | :-:  | :-: | :-: |
|     <sub>Chrome</sub>    | <sub>83.0.4103.97</sub>  | <sub>Laptop</sub>    | <sub>1200x700</sub>  |
|     <sub>Firefox</sub>   | <sub>76.0.1</sub>        | <sub>Tablet</sub>    | <sub>800x700</sub>   |
| <sub>Edge Chromium</sub> | <sub>83.0.478.45</sub>   | <sub>Mobile</sub> | <sub>500x700</sub>   |

#### Traditional Test Cases count
|    <sub>Task</sub>  |    <sub>Test cases (incl. different viewports)</sub> |  <sub>Browser Count</sub>  |  <sub>Total Test cases</sub>
| :-:  | :-: | :-: | :-:  |
|    <b> <sub>Task 1</sub> </b>   | <sub>26</sub>  | <sub>3</sub>    | <sub>78</sub> |
|    <b> <sub>Task 2</sub> </b>   | <sub>6</sub>  | <sub>3</sub>    | <sub>18</sub> |
|    <b> <sub>Task 3</sub> </b>   | <sub>15</sub>  | <sub>3</sub>    | <sub>45</sub> |
<b><sub>Sub Total Test cases</sub></b>|  |  | <b><sub>141</b></sub>


#### Task Status
|    Approach  |    Task Completion |    Overall Time Taken  | 
| :-: | :-: |:-: |
|    <b> <sub>Traditional</sub> </b>   | <sub>All Tasks</sub>  | <sub>11 hours</sub>    |
|     <b><sub>Modern</sub></b>   | <sub>All Tasks</sub>        | <sub> 4 hours</sub>    |

#### Task 1 V1
<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/Task_1.JPG??raw=true" width="700" height="400" />

#### Task 2 V1
<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/Task_2.JPG??raw=true" width="800" height="400" />

#### Task 3 V1
<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/Task_3.JPG??raw=true" width="800" height="400" />

### Impressive Bugs

#### Expectect | Actual
<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/Bug%20a.JPG??raw=true" width="200" height="200" /><img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/Bug%20a1.JPG??raw=true" width="200" height="200" />



