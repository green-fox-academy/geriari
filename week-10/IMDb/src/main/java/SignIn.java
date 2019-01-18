import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SignIn {

  public static void signIn(WebDriver driver) {
    driver.findElement(By.className("signin-imdb-text")).click();
    driver.findElement(By.xpath("//*[@id=\"signin-options\"]/div/div[1]/a[1]")).click();
    WebElement emailInput = driver.findElement(By.id("ap_email"));
    emailInput.sendKeys("andras.gerencser@gmail.com");
    WebElement passwordInput = driver.findElement(By.id("ap_password"));
    passwordInput.sendKeys("Greenfox");
    driver.findElement(By.id("signInSubmit")).click();
  }
}
