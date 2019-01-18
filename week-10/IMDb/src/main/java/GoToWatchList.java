import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class GoToWatchList {

  public static void goToWatchList(WebDriver driver) {
    driver.findElement(By.xpath("//*[@id=\"navWatchlistMenu\"]/p/a")).click();
  }
}
