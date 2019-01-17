import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Keys;

import java.security.Key;

public class IMDb {

  public static void main(String[] args) {

    System.setProperty("webdriver.chrome.driver", "/Users/geri/TestAutomation/chromedriver");
    WebDriver driver = new ChromeDriver();

    driver.get("https://www.imdb.com");

    //sign in
    driver.findElement(By.className("signin-imdb-text")).click();
    driver.findElement(By.xpath("//*[@id=\"signin-options\"]/div/div[1]/a[1]")).click();
    WebElement emailInput = driver.findElement(By.id("ap_email"));
    emailInput.sendKeys("andras.gerencser@gmail.com");
    WebElement passwordInput = driver.findElement(By.id("ap_password"));
    passwordInput.sendKeys("Greenfox");
    driver.findElement(By.id("signInSubmit")).click();

    //search
    WebElement searchInput = driver.findElement(By.id("navbar-query"));
    searchInput.sendKeys("Bron");
    searchInput.sendKeys(Keys.RETURN);

    // click where a href=text ends with "tt 1"
    //String firstResultText = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/table/tbody/tr[1]/td[2]/a")).getText();
    //System.out.println(firstResultText);

    //select the first from the result list
    driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/table/tbody/tr[1]/td[2]/a")).click();

    //add to watchlist
    //why is it not working?
    //driver.findElement(By.className("wl-ribbon standalone not-inWL")).click();
    driver.findElement(By.xpath("//*[@id=\"title-overview-widget\"]/div[1]/div[2]/div/div[2]/div[1]/div[1]/div")).click();

    //search another one
    //why do i have to define the same DOM place again?
    WebElement searchInput2 = driver.findElement(By.id("navbar-query"));
    searchInput2.sendKeys("Fargo");
    searchInput2.sendKeys(Keys.RETURN);

    //select the first from the list
    driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/table/tbody/tr[1]/td[2]/a")).click();

    //add to watchlist
    driver.findElement(By.xpath("//*[@id=\"title-overview-widget\"]/div[1]/div[2]/div/div[2]/div[1]/div[1]/div")).click();

    //go to my watchlist
    //why is it not working?
    //driver.findElement(By.className("navCategory singleLine watchlist")).click();
    driver.findElement(By.xpath("//*[@id=\"navWatchlistMenu\"]/p/a")).click();

    //sort descending
    driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[2]/div[1]/div[1]/div[1]/button/span")).click();

    //sort ascending


  }
}
