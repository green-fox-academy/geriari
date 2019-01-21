import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DeleteAllFromWatchList {

  public static void deleteAllFromWatchList(WebDriver driver) {
    driver.findElement(By.xpath("//*[@id=\"center-1-react\"]/div/div[1]/div/div[1]/a")).click();
    driver.findElement(By.id("totalCheck")).click();
    driver.findElement(By.id("delete_items")).click();
  }
}
