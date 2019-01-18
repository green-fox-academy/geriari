import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AddToWatchList {

  public static void addToWatchList(WebDriver driver) {
    WebElement watchListButton = driver.findElement(By.xpath("//*[@id=\"title-overview-widget\"]/div[2]/div[2]/span/div"));
    if (watchListButton.getAttribute("title").contains("add")) {
      watchListButton.click();
    }
  }
}
