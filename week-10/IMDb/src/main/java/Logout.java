import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class Logout {

  public static void logout(WebDriver driver) {
    //WebElement user = driver.findElement(By.id("nbusername"));
    //WebElement logout = driver.findElement(By.id("nblogout"));
    WebElement user = driver.findElement(By.xpath("//*[@id=\"nbusername\"]"));
    WebElement logout = driver.findElement(By.xpath("//*[@id=\"nblogout\"]"));
    Actions action = new Actions(driver);
    action.moveToElement(user).moveToElement(logout).click().build().perform();
  }
}
