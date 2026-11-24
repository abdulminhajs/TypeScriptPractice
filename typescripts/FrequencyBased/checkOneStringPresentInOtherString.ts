function checkOneStringPresentInOtherString(mainString: string, searchString:string ){
   let result = mainString.includes(searchString);
   console.log(result + 'search string is present in main ' )
}

checkOneStringPresentInOtherString(" Playwright is best for automation", "best");
checkOneStringPresentInOtherString(" Selenium is better chioce for automation", "best");   