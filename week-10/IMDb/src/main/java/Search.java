import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class Search {

  public static int search(WebDriver driver, String searchedText) {
    WebElement searchInput = driver.findElement(By.id("navbar-query"));
    searchInput.sendKeys(searchedText);
    searchInput.sendKeys(Keys.RETURN);
    WebElement container = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[3]/div[1]/div/div[2]/table"));
    List<WebElement> elements = container.findElements(By.className("findResult"));
    System.out.println(elements.size());
    for (WebElement element: elements) {
      System.out.println(element);
    }
    return(elements.size());
  }
}
