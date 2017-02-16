$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basic/EntryCreationDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Create and delete an entry",
  "description": "",
  "id": "create-and-delete-an-entry",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1091563736,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Create an entry"
    }
  ],
  "line": 4,
  "name": "User should be able to login and create an entry",
  "description": "",
  "id": "create-and-delete-an-entry;user-should-be-able-to-login-and-create-an-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am  on the hotel manangement platform",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I authenticate the page with user id and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I create an entry with Hotelname, address, owner, phoneno and emailadress",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the entry should be created sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_am_on_the_hotel_manangement_platform()"
});
formatter.result({
  "duration": 1777673306,
  "status": "passed"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_authenticate_the_page_with_user_id_and_password()"
});
formatter.result({
  "duration": 79401996052,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1),platform\u003dMac OS X 10.12.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 75.18 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Mathys-MacBook-Pro.local\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1), userDataDir\u003d/var/folders/zx/70ll6rkx03307p4d3vkfz1xw0000gn/T/.org.chromium.Chromium.y2poFf}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ea337b29bb2369f978c30c741ebad128\n*** Element info: {Using\u003did, value\u003d}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.access$001(AjaxElementLocator.java:41)\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator$SlowLoadingElement.isLoaded(AjaxElementLocator.java:157)\n\tat org.openqa.selenium.support.ui.SlowLoadableComponent.get(SlowLoadableComponent.java:59)\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:87)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.hotel.test.pages.hotel.HotelEntryCreationPage.selectLogin(HotelEntryCreationPage.java:109)\n\tat com.hotel.test.steps.jp.CreateDeleteEntrySteps.i_authenticate_the_page_with_user_id_and_password(CreateDeleteEntrySteps.java:28)\n\tat ✽.When I authenticate the page with user id and password(basic/EntryCreationDelete.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_create_an_entry_with_Hotelname_address_owner_phoneno_and_emailadress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.the_entry_should_be_created_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10017856941,
  "status": "passed"
});
formatter.before({
  "duration": 660491,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Delete an entry"
    }
  ],
  "line": 11,
  "name": "User should be able to delete the created entry",
  "description": "",
  "id": "create-and-delete-an-entry;user-should-be-able-to-delete-the-created-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am  on the hotel manangement platform",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I authenticate the page with user id and password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I create an entry with Hotelname, address, owner, phoneno and emailadress",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the entry should be created sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I delete the created entry",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the entry should be deleted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_am_on_the_hotel_manangement_platform()"
});
formatter.result({
  "duration": 5435992,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1),platform\u003dMac OS X 10.12.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Mathys-MacBook-Pro.local\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1), userDataDir\u003d/var/folders/zx/70ll6rkx03307p4d3vkfz1xw0000gn/T/.org.chromium.Chromium.y2poFf}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ea337b29bb2369f978c30c741ebad128\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\n\tat com.hotel.test.pages.hotel.HotelEntryCreationPage.goToHomePage(HotelEntryCreationPage.java:60)\n\tat com.hotel.test.steps.jp.CreateDeleteEntrySteps.i_am_on_the_hotel_manangement_platform(CreateDeleteEntrySteps.java:22)\n\tat ✽.Given I am  on the hotel manangement platform(basic/EntryCreationDelete.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_authenticate_the_page_with_user_id_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_create_an_entry_with_Hotelname_address_owner_phoneno_and_emailadress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.the_entry_should_be_created_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_delete_the_created_entry()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.the_entry_should_be_deleted_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 85618660669,
  "status": "passed"
});
formatter.before({
  "duration": 1994427,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#Create multiple entries"
    }
  ],
  "line": 20,
  "name": "User should be able to delete the created entry",
  "description": "",
  "id": "create-and-delete-an-entry;user-should-be-able-to-delete-the-created-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am  on the hotel manangement platform",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I authenticate the page with user id and password",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I create more than one entry with Hotelname, address, owner, phoneno and emailadress",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "all the entries should be created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_am_on_the_hotel_manangement_platform()"
});
formatter.result({
  "duration": 75281830984,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1),platform\u003dMac OS X 10.12.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 75.28 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Mathys-MacBook-Pro.local\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1), userDataDir\u003d/var/folders/zx/70ll6rkx03307p4d3vkfz1xw0000gn/T/.org.chromium.Chromium.y2poFf}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ea337b29bb2369f978c30c741ebad128\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\n\tat com.hotel.test.pages.hotel.HotelEntryCreationPage.goToHomePage(HotelEntryCreationPage.java:60)\n\tat com.hotel.test.steps.jp.CreateDeleteEntrySteps.i_am_on_the_hotel_manangement_platform(CreateDeleteEntrySteps.java:22)\n\tat ✽.Given I am  on the hotel manangement platform(basic/EntryCreationDelete.feature:21)\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_authenticate_the_page_with_user_id_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.i_createmore_than_one_entry_with_Hotelname_address_owner_phoneno_and_emailadress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateDeleteEntrySteps.all_the_entries_should_be_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 85192357085,
  "status": "passed"
});
});