import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ToggleOrder {
  public static void toggleOrder(WebDriver driver) {
    driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[2]/div[1]/div[1]/div[1]/button/span")).click();
  }
}
