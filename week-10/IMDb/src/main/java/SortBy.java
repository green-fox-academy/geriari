import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class SortBy {
  public static void sortBy(WebDriver driver, String attribute) {
    Select dropDownList = new Select(driver.findElement(By.className("lister-sort-by")));
    dropDownList.selectByVisibleText(attribute);
  }
}
