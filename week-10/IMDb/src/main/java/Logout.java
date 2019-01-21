import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Logout {
  static WebDriverWait wait;

  public static void logout(WebDriver driver) {
    wait = new WebDriverWait(driver, 10);
    wait.until(ExpectedConditions.elementToBeClickable(By.id("nbusername")));
    WebElement user = driver.findElement(By.id("nbusername"));
    //WebElement user = driver.findElement(By.xpath("//*[@id=\"nbusername\"]"));
    //WebElement logout = driver.findElement(By.xpath("//*[@id=\"nblogout\"]"));
    Actions action = new Actions(driver);
    action.moveToElement(user).build().perform();
    wait.until(ExpectedConditions.elementToBeClickable(By.id("nblogout")));
    WebElement logout = driver.findElement(By.id("nblogout"));
    logout.click();
  }
}
