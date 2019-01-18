import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Select1st {

  public static void select(WebDriver driver) {
    driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[2]/table/tbody/tr[1]/td[2]/a")).click();
  }
}
